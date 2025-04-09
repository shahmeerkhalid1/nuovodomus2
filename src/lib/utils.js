import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function cardSlideAnimation() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: -150,

    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    }
  };
  return cardVariants
}
export function cardSlideAnimationDelay() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: -150,

    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay:0.4
      },
    }
  };
  return cardVariants
}
export function cardSlideAnimationRight() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: 150,

    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    }
  };
  return cardVariants
}
export function cardSlideAnimationRightDelay() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: 150,

    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay:0.4
      },
    }
  };
  return cardVariants
}


export function countCartProductQuantity(products) {
  return products.reduce((total, product) => total + product?.quantity, 0)
}

export const fadeInAnimation = () => ({
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.6, delay: 0.3 }
  }
});

export const zoomInAnimation = () => ({
  offscreen: { scale: 0.8, opacity: 0 },
  onscreen: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 }
  }
});

export const slideUp3DAnimation = () => ({
  offscreen: { y: 100, opacity: 0, rotateX: 40 },
  onscreen: {
      y: 0,
      opacity: 1,
      rotateX: 15, // Matches the 3D tilt in the styling
      transition: { type: "spring", stiffness: 80, damping: 20, duration: 0.8, delay: 0.3 }
  }
});
