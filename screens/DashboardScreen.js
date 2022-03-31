import React ,{useEffect}from 'react';
import {FlatList,Text} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import * as articleActions from '../store/actions/articles';
const DashboardScreen = props => {
  const article = useSelector(state => state.articles.userProducts);
  const dispatch=useDispatch();
  // console.log(article);
  useEffect(()=>{
    dispatch(articleActions.fetchArticles());
  },[dispatch]);
  return (

    <FlatList
    data={article}
    keyExtractor={item => item.id}
      />
  
  );
}
export default DashboardScreen;