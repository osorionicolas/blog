import Dialog from '@material-ui/core/Dialog';

interface SubscribeDialogProps {
  open: boolean
}

export default function SubscribeDialog(props: SubscribeDialogProps) {
  const { open } = props

  return (
    <Dialog open={open}></Dialog>
  )
}
