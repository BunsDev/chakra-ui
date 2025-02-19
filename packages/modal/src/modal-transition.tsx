import { chakra, ChakraProps } from "@chakra-ui/system"
import { scaleFadeConfig, slideFadeConfig } from "@chakra-ui/transition"
import { __DEV__ } from "@chakra-ui/utils"
import { HTMLMotionProps, motion } from "framer-motion"
import { forwardRef } from "react"

export interface ModalTransitionProps
  extends Omit<HTMLMotionProps<"section">, "color" | "transition">,
    ChakraProps {
  preset: "slideInBottom" | "slideInRight" | "scale" | "none"
}

const transitions = {
  slideInBottom: {
    ...slideFadeConfig,
    custom: { offsetY: 16, reverse: true },
  },
  slideInRight: {
    ...slideFadeConfig,
    custom: { offsetX: 16, reverse: true },
  },
  scale: {
    ...scaleFadeConfig,
    custom: { initialScale: 0.95, reverse: true },
  },
  none: {},
}

const Motion = chakra(motion.section)

export const ModalTransition = forwardRef(
  (props: ModalTransitionProps, ref: React.Ref<any>) => {
    const { preset, ...rest } = props
    const motionProps = transitions[preset]
    return <Motion ref={ref} {...(motionProps as ChakraProps)} {...rest} />
  },
)

if (__DEV__) {
  ModalTransition.displayName = "ModalTransition"
}
