import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHeadlines= createAsyncThunk("headlines",async()=>{
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=be36b6d88b6a49c4a1bb7aa084492e56")
    return response.json();
})

export const fetchNews = createAsyncThunk("news",async(category)=>{
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=be36b6d88b6a49c4a1bb7aa084492e56`)
    return response.json();
})
export const searchNews = createAsyncThunk("search",async(searchQuery)=>{
  const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=popularity&apiKey=be36b6d88b6a49c4a1bb7aa084492e56`)
  return response.json();
})


const newsSlice = createSlice({
    name: "News Slice",
    initialState: {
        headlines: [],
        news: [],
        status: 'idle',
        error: null,
        categories:[
          "business",
          "entertainment",
          "health",
          "science",
          "sports",
          "technology",
        ],
        search: [],
    },
    extraReducers:(builder)=>{
        builder.addCase(getHeadlines.fulfilled, (state, action) => {
            state.headlines = action.payload.articles;
          })
          builder
          .addCase(fetchNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.news = action.payload.articles;
          })   
          .addCase(searchNews.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.news = action.payload.articles;
          })   
    }
})
export default newsSlice.reducer;
