import { useState, useEffect }from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { LinkedIn } from '@material-ui/icons';
import axios from 'axios';

const sections = [
  { title: 'About Me', url: '#' },
  { title: 'Contact', url: '#' },
  { title: 'Subscribe', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    `I've been working as a full stack developer for the last 4 years. I am a team-oriented person who always try to give my teammates a hand and help them.\n
    One of my ambitions is to always keep learning, I love improving my technical skills and I'm looking for new challenges. Also one of my goals is to be given the opportunity to relocate.\n
    Personally, I love videogames, travelling and discovering new cultures.`,
  archives: [
    { title: 'June 2021', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/osorionicolas' },
    { name: 'LinkedIn', icon: LinkedIn, url: 'https://www.linkedin.com/in/osorionicolas95/' },
  ],
};

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const response = axios("http://192.168.1.10:8055/items/posts")
    console.log(response)
  }, [])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Nicolás Osorio" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            <Main title="New Title" posts={posts} />
          </Grid>
        </main>
      </Container>
      <Footer sections={sections} />
    </>
  );
}
