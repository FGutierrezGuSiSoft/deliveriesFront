import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import DeliveriesTable from './DeliveriesTable';
import CreateDeliveryDialog from './CreateDeliveryDialog';
import { createDelivery, getDeliveries } from '../api';

class Deliveries extends React.Component {
  constructor(){
    super();
    this.state = {
      deliveries: [],
      createDeliveryDialogVisible: false,
      newDelivery: this.getEmptyDelivery(),
    }
  }

  componentDidMount() {
    getDeliveries().then(deliveries => {
      this.setState({ deliveries });
    });
  }

  getEmptyDelivery = () => ({ description: "", number: "", status: "", creation: "" });

  handleCreateDelivery = () => {
    this.setState({
      createDeliveryDialogVisible: true
    })
  }

  handleCancelCreateDelivery = () => {
    this.setState({
      newDelivery: this.getEmptyDelivery(),
      createDeliveryDialogVisible: false
    });
  }

  handleAcceptCreateDelivery = () => {
    createDelivery(this.state.newDelivery).then(delivery => {
      const deliveries = [...this.state.deliveries, delivery];
      this.setState({
        deliveries,
        newDelivery: this.getEmptyDelivery(),
        createDeliveryDialogVisible: false
      });
    });
  }

  handleOnChangeCreateDelivery = (field, value) => {
    const newDelivery = this.getEmptyDelivery();
    newDelivery[field] = value;
    this.setState({ newDelivery });
  }

  render() {
    return (
      <div>
        <Navbar href="logout" titulo="Salir"/>
        <Card titulo="Mis Pedidos">
          <CreateDeliveryDialog
            visible={this.state.createDeliveryDialogVisible}
            delivery={this.state.newDelivery}
            onCancel={this.handleCancelCreateDelivery}
            onAccept={this.handleAcceptCreateDelivery}
            onChange={this.handleOnChangeCreateDelivery}
          />
        <DeliveriesTable deliveries={this.state.deliveries} />
          <div className="createDeliveryContainer">
            <button className="createDelivery" onClick={this.handleCreateDelivery}>
              Crear Pedido
            </button>
          </div>
        </Card>
      </div>
    );
  }
}

export default Deliveries;
