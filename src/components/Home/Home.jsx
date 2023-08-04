import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../http";

const Home = () => {
  const { api } = http();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(api.get("/users"))
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [api]);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center bg-slate-200 my-3 py-1 text-slate-600">
        All User
      </h2>
      <div className="overflow-x-auto">
        <table className="table mt-3">
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="hover" key={user.id}>
                <th>{index}</th>
                <td>{user.name}</td>
                <td>{user.job}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/create">
          <button className="btn btn-info mt-5">Create</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
