import {useContext} from 'react';
import {GlobalContext} from'../../src/components/App';
import { useRouter } from 'next/router';
import otherProjects from '../../src/helpers/otherRoutes';
import ProjectArrows from '../../src/components/ProjectArrows';
import Stack from '../../src/components/Stack';
import Head from 'next/head';
import {BackButton, Content, ProjectSection, Title, Gallery, ShowWebsite} from '../../src/styles/singleProjectStyles';
import ImageGallery from 'react-image-gallery';
import useTranslation from 'next-translate/useTranslation';
import "react-image-gallery/styles/css/image-gallery.css";

const Project = ({name, description, url, stack, images, otherRoutes}) => {
  const { t } = useTranslation('common');
  const {indexScroll} = useContext(GlobalContext);
  const router = useRouter();
  const handleBack = () => {
    router.push('/').then(() => window.scrollTo(0, indexScroll));
  }
  const slides = images.map(img => ({original: img}));
  return(
      <>
      <Head>
        <title>Projekty - Adam Blicharz</title>
      </Head>
      <ProjectSection className="container">
          <ProjectArrows prev={otherRoutes?.prev} next={otherRoutes?.next}/>
          <BackButton onClick={handleBack}><img src="/back.png" alt=""/>{t('Return')}</BackButton>
          <Title>
            {name}
            <ShowWebsite href={url} target="blank">
              {t('CheckSite')}
              <img src="/www.png" alt=""/>
            </ShowWebsite>
          </Title>
          <Content> {description} </Content>
          <Gallery>
            <ImageGallery
              items={slides}
              showThumbnails={false}
              showFullscreenButton={false}
              autoPlay
              slideInterval={4000}/>
          </Gallery>
          <Stack {...stack} />
      </ProjectSection>
      </>
  )
}

export default Project;

//------------------------------ Server Side Code ------------------------------

import {request} from '../../lib/datocms';

const ROUTES_QUERY = `query MyQuery {
  allProjects {
    route
  }
}`;

const langs = ['en', 'pl'];

export async function getStaticPaths() {
  const { allProjects } = await request({
    query: ROUTES_QUERY
  });
  const paths = allProjects.reduce((acc, {route}) =>
    [...acc || [], { params: { project: route }, locale: 'en' }, { params: { project: route }, locale: 'pl' }]
  ,[]);
  return {
    paths, fallback: false
  };
}

export async function getStaticProps({locale, params}) {
  const route = params.project;
  const PROJECT_QUERY = `query MyQuery($route: String) {
    project(filter: {route: {eq: $route}}, locale: ${locale}) {
      imgs
      name
      route
      stack
      url
      description
    }
  }`;
  const { project } = await request({
    query: PROJECT_QUERY,
    variables: { route }
  });
  // Duplicated because it's not possible yet to pass additional data from paths to props
  const { allProjects } = await request({
    query: ROUTES_QUERY
  });
  const {prev, next} = otherProjects(route, allProjects);
  return {
    props: {
      key: route,
      name: project['name'],
      description: project['description'],
      url: project['url'],
      stack: project['stack'],
      images: project['imgs'],
      otherRoutes: {prev, next}
    }
  }
}