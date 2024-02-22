import PostList from './postList'
import React from 'react'

const posts = [
    {
        id: 1,
        title: "Test"
    },
    {
        id: 2,
        title: "Game"
    },
    {
        id: 1,
        title: "Job"
    }
]

export default function Page() {
  return (
    <PostList posts={posts}/>
  )
}