import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Connection {
  from: number;
  to: number;
  width: number;
  alpha: number;
}

export function NeuralNetworkAnimation({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);

  // Initialize neural network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const { clientWidth, clientHeight } = canvas.parentElement as HTMLElement;
      canvas.width = clientWidth;
      canvas.height = clientHeight;
      
      // Re-initialize when canvas size changes
      initializeNetwork();
    };

    const initializeNetwork = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      nodesRef.current = [];
      connectionsRef.current = [];

      // Create nodes (neurons)
      const totalNodes = Math.floor(canvas.width * canvas.height / 15000);
      for (let i = 0; i < totalNodes; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 2 + 2,
        });
      }

      // Create connections
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const dist = Math.hypot(
            nodesRef.current[i].x - nodesRef.current[j].x,
            nodesRef.current[i].y - nodesRef.current[j].y
          );
          
          if (dist < canvas.width / 6) {
            connectionsRef.current.push({
              from: i,
              to: j,
              width: Math.random() * 0.5 + 0.2,
              alpha: Math.min(0.5, 1 - dist / (canvas.width / 6))
            });
          }
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      frameCountRef.current++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update nodes position
      for (const node of nodesRef.current) {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Ensure nodes stay within canvas
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      }

      // Draw connections
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(150, 122, 220, 0.5)';
      
      for (const connection of connectionsRef.current) {
        const fromNode = nodesRef.current[connection.from];
        const toNode = nodesRef.current[connection.to];
        
        const distance = Math.hypot(
          fromNode.x - toNode.x,
          fromNode.y - toNode.y
        );
        
        // Adjust line opacity based on distance
        const alpha = connection.alpha * (1 - distance / (canvas.width / 5));
        if (alpha <= 0) continue;
        
        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);
        ctx.strokeStyle = `rgba(150, 122, 220, ${alpha})`;
        ctx.lineWidth = connection.width;
        ctx.stroke();
        
        // Occasionally send pulses along connections
        if (Math.random() < 0.001) {
          animatePulse(fromNode, toNode);
        }
      }

      // Draw nodes
      for (const node of nodesRef.current) {
        ctx.beginPath();
        // Create a gradient
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius
        );
        gradient.addColorStop(0, 'rgba(180, 145, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(180, 145, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const animatePulse = (fromNode: Node, toNode: Node) => {
      // Create a pulse animation along the connection
      const pulseCount = 5;
      const duration = 30; // frames
      
      for (let i = 0; i < pulseCount; i++) {
        setTimeout(() => {
          const pulse = {
            x: fromNode.x,
            y: fromNode.y,
            targetX: toNode.x,
            targetY: toNode.y,
            progress: 0,
            maxProgress: duration
          };
          
          function animateSinglePulse() {
            if (pulse.progress >= pulse.maxProgress) return;
            
            pulse.progress++;
            const ratio = pulse.progress / pulse.maxProgress;
            const x = fromNode.x + (toNode.x - fromNode.x) * ratio;
            const y = fromNode.y + (toNode.y - fromNode.y) * ratio;
            
            const ctx = canvas?.getContext('2d');
            if (!ctx) return;
            
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${1 - ratio})`;
            ctx.fill();
            
            requestAnimationFrame(animateSinglePulse);
          }
          
          animateSinglePulse();
        }, i * 200);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
    </div>
  );
}