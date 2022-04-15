import React from 'react';
import { Heading, Page, TextStyle, Layout, EmptyState} from "@shopify/polaris";

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

export default function Index() {
    return (
      <Page>
        <Layout>
          <EmptyState // Empty state component
            heading="Create Product Options"
            
            image={img}
          >
            <p>Our app allows you to create as many product options as you need by treating every option as its own product. </p>
            <p>To create a set of product options, first create a "base" product, and then an additional product for every option using shopify's default product maker. Feel free to include additional variants on all these products. </p>
<p>Once you have all your options created, create a new "collection" under the same name as your base product and add all your newly created products to the collection.</p>
<p>Now all the products in that collection will be displayed on the base product's page, customers will be able to add and remove options from their carts and see the price update as they do!</p>
          </EmptyState>
        </Layout>
      </Page>
    );
};




