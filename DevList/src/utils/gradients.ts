export function getGradientFor(id: number): string {
    const gradients = [
      "linear-gradient(135deg,#FF6B6B,#FFD46B)",
      "linear-gradient(135deg,#6BFFB8,#6BD7FF)",
      "linear-gradient(135deg,#C77DFF,#FF78A6)",
      "linear-gradient(135deg,#FFD36B,#FF9C6B)",
      "linear-gradient(135deg,#6BB4FF,#6BFFEF)",
      "linear-gradient(135deg,#A06BFF,#6BFFCB)",
    ];
    return gradients[(id - 1) % gradients.length];
  }
  