import { useState, useEffect } from "react";

const UpdateItem = ({ API_URI }) => {
  const [item, setItem] = useState(null); // Stores the existing item
  const [formData, setFormData] = useState({ name: "", status: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulated API Fetch (Replace with actual API request when backend is available)
  useEffect(() => {
    const fetchItem = async () => {
      try {
        console.log("Fetching item from:", `${API_URI}/1`);

        // Simulating an API call delay
        setTimeout(() => {
          const mockData = { id: 1, name: "Front Door", status: "Open" };
          setItem(mockData);
          setFormData({ name: mockData.name, status: mockData.status });
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to fetch item");
        setLoading(false);
      }
    };

    fetchItem();
  }, [API_URI]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate API Update Request
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("Updating item:", formData);

      // Simulating a PUT request to update the item
      setTimeout(() => {
        setItem(formData);
        alert("Item updated successfully!");
      }, 1000);
    } catch (error) {
      alert("Failed to update item");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>No item found.</p>;

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="Enter status"
        />
        <button type="submit">Update</button>
      </form>

      <h3>Updated Data:</h3>
      <p>Name: {item.name}</p>
      <p>Status: {item.status}</p>
    </div>
  );
};

export default UpdateItem;