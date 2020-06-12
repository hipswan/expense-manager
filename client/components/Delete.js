import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Delete extends React.Component {
  constructor() {
    super();
    this.state = { id: "", month: "", year: "" };
    this.onClick = this.onClick.bind(this);
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
    this.setState({
      id: this.props.expense._id,
      month: this.props.expense.month,
      year: this.props.expense.year,
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.expense._id,
      month: nextProps.expense.month,
      year: nextProps.expense.year,
    });
  }
  onClick(e) {
    this.delete(this);
  }
  delete(e) {
    axios.get("/delete?id=" + e.state.id).then(function (response) {});
  }
  render() {
    return (
      <Link
        to={{
          pathname: "/",
          search: "?month=" + this.state.month + "&year=" + this.state.year,
        }}
        style={{ textDecoration: "none" }}
      >
        <Button variant="danger" size="sm" onClick={this.onClick}>
          <FontAwesomeIcon icon={faTrash} color="black" />
        </Button>
      </Link>
    );
  }
}
export default Delete;
