import { Modal } from "../common/Modal";

export function WarningModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <Modal open={open} onClose={onClose} showCloseButton title="Withdraw is not enabled">
      <div className="mt-4 text-center text-sm text-gray-500">
        Withdraw is a production-only feature.
      </div>
    </Modal>
  );
}
