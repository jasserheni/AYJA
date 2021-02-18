import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Categories = () => {
  return (
    <CategoriesStyled>
      <div className='intro'>
        <h1>welcome to Go My Shop.</h1>
        <p>Clothing store.</p>
      </div>
      <div className='categories container'>
        <Link to='/shop?category=women' className='img-container'>
          <img src='https://images.unsplash.com/photo-1578100584776-fdf3ff0b367f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='women category' />
          <span>Women</span>
        </Link>
        <Link to='/shop?category=men' className='img-container'>
          <img src='https://images.unsplash.com/photo-1555683236-104f9922a513?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='men category' />
          <span>Men</span>
        </Link>
        <Link to='/shop?category=kids' className='img-container'>
          <img src='https://images.unsplash.com/photo-1529776292731-c2246c65df5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='kids category' />
          <span>Kids</span>
        </Link>
        <Link to='/shop?category=accesories' className='img-container'>
          <img src='https://images.unsplash.com/photo-1584184804426-5e2aa23c2937?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='accesories category' />
          <span>Accessories</span>
        </Link>
      </div>
    </CategoriesStyled>

  )
}

const CategoriesStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 0;
  .intro {
    text-align: center;
    margin: 1rem 0 3rem;
    h1 {
      text-transform: uppercase;
    }
    p{
      color: silver;
    }
  }
  .container {
      padding:0;
    }
  .categories {
    display: grid;
    grid-gap: 1.5rem;
   
    .img-container{
      position: relative;
      overflow: hidden;
      cursor: pointer;
      width:309px;
      height:402px;
    }
    .img-container img{
      transition: all 0.4s ease-in;
    }
    .img-container:hover img{
      transform: scale(1.1);
    }
    .img-container:nth-child(1){
      grid-area: women;
    }
    .img-container:nth-child(2){
      grid-area: men;
    }
    .img-container:nth-child(3){
      grid-area: bags;
    }
    .img-container:nth-child(4){
      grid-area: shoes;
    }
    grid-template-columns: none;
    grid-template-areas:
      'women women bags men men'
      'women women bags men men'
      'women women shoes men men'
      'women women shoes men men';
    span{
      position: absolute;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%);
      background: var(--light-clr);
      padding: 0.5rem 1rem;
    }
  }
  @media(max-width: 996px){
    margin: 0 auto 5rem;
    .intro {
      margin: 3rem 0;
      h1{
        font-size: 1.3rem;
      }
    }
    .container {
      padding: 0;
    }  
  }
  @media (max-width: 768px){
    .categories{
      grid-template-areas:
        'women bags'
        'shoes men';
      grid-gap: 0.6rem;
      .img-container {
        height: 100%;
        img{
          height: 100%;
        }
      }
    }
  }
`

export default Categories
