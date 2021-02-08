import { BackgroundBox, ModalContent, StyledModal } from "./styles"

interface ModalProps {
  open: boolean
  onClose: Function
  opacity?: number
}

export const Modal: React.FC<ModalProps> = ({ opacity = 20, ...props }) => {
  const opacityPercentageInDecimals = opacity / 100

  return props.open ? (
    <StyledModal>
      <BackgroundBox
        opacity={opacityPercentageInDecimals}
        onClick={() => props.onClose()}
      />
      <ModalContent>{props.children}</ModalContent>
    </StyledModal>
  ) : null
}