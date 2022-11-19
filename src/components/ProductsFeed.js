import React from 'react'
import Product from './Product'

const ProductsFeed = ({ products }) => {
    return (
        <div className='grid grid-flow-row md:grid-cols-2 lg:cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
            {products.slice(0,4).map(({ id, title, price, description, category, image }) =>
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )}
            <img className='md:col-span-full w-full cursor-pointer' src="https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/314406732_129628556557827_1628853690282684200_n.png?stp=dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=ab6a21&_nc_eui2=AeFl1FFkMlWR3SFCG-beku3EzaSH7NI1-8HNpIfs0jX7wdN7_59Eqg9esTBcDSj3WjwfjuF7Di_5_AKPRSRcZBJv&_nc_ohc=S4QC0jXVjNAAX_PTUfk&_nc_zt=23&_nc_ht=scontent.flos3-2.fna&oh=00_AfBR0nWA4c2Kg85WRjNfrVXYjvW31AL8FMC6krRACu8miQ&oe=6373AB43" alt="feed-banner" />
            <div className='md:col-span-2'>
            {products.slice(4, 5).map(({ id, title, price, description, category, image }) =>
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )}
            </div>
            {products.slice(5, products.length).map(({ id, title, price, description, category, image }) =>
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
            )}
        </div>
    )
}

export default ProductsFeed
