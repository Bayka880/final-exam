import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TaskList from '../component/TaskList'
export default function Home() {
  return (
    <div>
    <TaskList/>  
    </div>
  )
}
