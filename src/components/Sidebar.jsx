import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  const goDashboard = () => {
    navigate("/");
  };

  const goUsers = () => {
    navigate("/users");
  };

  const goProducts = () => {
    navigate("/products");
  };

  return (
    <div
      className="grid"
      style={{
        border: "1px solid gray",
        width: "20%",
        height: "100vh",
        gap: "20px",
        position: "absolute",
        top: "0px",
        background: "gray",
        padding: "50px",
        display: "grid",
      }}
    >
      <button onClick={goDashboard}>Dashboard</button>

      <button onClick={goUsers}>Users</button>

      <button onClick={goProducts}>Products</button>
    </div>
  );
};
