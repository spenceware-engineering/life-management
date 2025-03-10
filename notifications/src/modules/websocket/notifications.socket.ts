
import { Socket } from "socket.io"
import MySocketInterface from "./mySocketInterface"

class OrdersSocket implements MySocketInterface {

  handleConnection(socket: Socket) {

    socket.emit('ping', 'Hi! I am a live socket connection')

  }

}

export default OrdersSocket
