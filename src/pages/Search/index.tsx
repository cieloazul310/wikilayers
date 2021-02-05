import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import PageContainer from '../../components/PageContainer';
import Title from '../../components/Search/Title';
import SearchForm from '../../components/Search/SearchForm';
import SearchResult from '../../components/Search/SearchResult';
import SearchedItems from '../../components/Search/SearchedItems';
import FeaturesList from '../../components/FeaturesList';
import useGaTrackPage from '../../utils/useGaTrackPage';

function SearchPage(): JSX.Element {
  const { pathname } = useLocation();
  useGaTrackPage(pathname);

  return (
    <PageContainer>
      <Title />
      <Container>
        <SearchForm />
      </Container>
      <SearchResult />
      <SearchedItems />
      <FeaturesList />
    </PageContainer>
  );
}

export default SearchPage;
