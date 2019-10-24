import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// This component is to hold an image for product/seller details page, or any other

export default function ContainerImage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', backgroundImage: require("../../../Assets/placeholder-image.webp"), height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}