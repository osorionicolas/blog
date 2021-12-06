import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Divider } from '@material-ui/core';

interface FooterProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
}

export default function Footer(props: FooterProps) {
  const { sections } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', pt: 4 }}>
      <Container maxWidth="lg">
      <Divider />
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      </Container>
    </Box>
  );
}
