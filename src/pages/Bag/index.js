import React, { Component } from "react";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import ProductsList from "../../components/ProductsList";
import BagService from "../../services/bag-service";
import Header from "../../components/Header";

import "./index.scss";

class BagPage extends Component {
  state = {
    bag: {},
    isLoaded: false,
    hasError: false
  };

  async componentDidMount() {
    const { bagId } = this.props;
    this.fetchBagById(bagId);
  }

  fetchBagById = async bagId => {
    try {
      const bag = await BagService.getBagByIdAsync(bagId);
      this.setState({ bag, isLoaded: true });
    } catch (e) {
      this.setState({ hasError: true });
    }
  };

  handleRemoveItem = async itemId => {
    const { bagId } = this.props;

    try {
      await BagService.deleteBagItemById(bagId, itemId);

      this.setState(({ bag }) => ({
        bag: {
          ...bag,
          items: bag.items.filter(item => item.id !== itemId)
        }
      }));
    } catch (e) {
      this.setState({ hasError: true });
    }
  };

  render() {
    const { bag, isLoaded, hasError } = this.state;

    if (hasError)
      return <div className="error">Error loading bag items...</div>;

    if (!isLoaded) return <Loading />;

    const total = bag.items.reduce((acc, item) => acc + Number(item.price), 0);

    return (
      <div className="page">
        <Header total={total} />
        <ProductsList items={bag.items} onRemoveItem={this.handleRemoveItem} />
        <Footer />
      </div>
    );
  }
}

export default BagPage;
