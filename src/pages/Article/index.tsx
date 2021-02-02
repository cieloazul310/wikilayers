import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PageContainer from '../../components/PageContainer';
import Loader from '../../components/Loader';
import { ArticleCache } from '../../utils/ArticleCache';
import { useArticle } from '../../utils/fetchArticle';
import { useAppState } from '../../utils/AppStateContext';

const useStyles = makeStyles((theme) =>
  createStyles({
    article: {
      padding: theme.spacing(2, 0),
    },
    title: {
      padding: theme.spacing(2, 0),
    },
    loaderContainer: {
      height: 400,
      padding: theme.spacing(2, 0),
    },
  })
);

const cache = new ArticleCache();

function Article() {
  const classes = useStyles();
  const { page } = useAppState();
  const article = useArticle(page, cache);

  return (
    <PageContainer>
      <div className={classes.article}>
        {page ? (
          <article>
            <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
              {page?.title}
            </Typography>
            {article ? (
              <div dangerouslySetInnerHTML={{ __html: article.extract }} />
            ) : (
              <>
                <Typography variant="body2" paragraph>
                  {page?.extract}
                </Typography>
                <div className={classes.loaderContainer}>
                  <Loader />
                </div>
              </>
            )}
          </article>
        ) : (
          <Typography className={classes.title} variant="h5" component="h2" gutterBottom>
            ページが選択されていません
          </Typography>
        )}
      </div>
    </PageContainer>
  );
}

export default Article;
