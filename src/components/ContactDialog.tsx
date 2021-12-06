import Dialog from '@material-ui/core/Dialog';

interface ContactDialogProps {
  open: boolean
}

export default function SubscribeDialog(props: ContactDialogProps) {
  const { open } = props

  return (
    <Dialog open={open}></Dialog>
  )
}
