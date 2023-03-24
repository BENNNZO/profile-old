const Variants = {
    offScreen: {
        y: 50,
        opacity: 0,
        scale: 0.75
    },
    onScreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1
        }
    }
}

export default Variants