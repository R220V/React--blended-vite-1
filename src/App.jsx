import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import article from './data/article.json';
import statsBOO from './data/stats.json';
import forbesBOO from './data/forbes.json';
import transationBOO from './data/transactions.json'

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" top bottom />
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          userName={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />

        <Heading title="Task 2 Statistics" top bottom />
              
        <Statistics  stats={statsBOO} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList listBOO={forbesBOO}/>

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory itemsBOO={transationBOO}/>
      </Container>
    </Section>
  );
};
