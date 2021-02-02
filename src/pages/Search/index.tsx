import * as React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PageContainer from '../../components/PageContainer';
import Title from '../../components/Search/Title';
import SearchForm from '../../components/Search/SearchForm';
import SearchResult from '../../components/Search/SearchResult';
import SearchedItems from '../../components/Search/SearchedItems';
import FeaturesList from '../../components/FeaturesList';

const useStyles = makeStyles((theme) => createStyles({}));

function SearchPage() {
  const classes = useStyles();
  return (
    <PageContainer>
      <Title />
      <SearchForm />
      <SearchResult />
      <SearchedItems />
      <FeaturesList />
    </PageContainer>
  );
}

export default SearchPage;
