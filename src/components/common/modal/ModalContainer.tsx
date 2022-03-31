import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../app/state";
import { RootState } from "../../../app/state/reducers";

const ModalContainer: React.FunctionComponent = () => {
  const { onClose } = useDisclosure();

  const state = useSelector((state: RootState) => state.modal);

  const dispatch = useDispatch();

  const { hideModal } = bindActionCreators(actionCreators, dispatch);
  const modal = {
    open: state.open,
    body: state.body,
  };
  if (modal.open === false) {
    return null;
  }

  const closeHandler = () => {
    hideModal({ body: null, open: false });
    onClose();
  };
  return (
    <Modal onClose={closeHandler} isOpen={state.open} isCentered closeOnOverlayClick={false} >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>{state.body}</ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};

export default ModalContainer;
