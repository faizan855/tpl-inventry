import React, { useState } from "react";

const Profile = ({ itemId }) => {
  const [selectedImage, setSelectedImage] = useState(null);

    const handleImageUpload = async () => {

      const formData = new FormData();
      formData.append("image", selectedImage);

      try {
        const response = await fetch(`/api/images`, {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const { imageUrl } = await response.json();
          await updateItemWithImage(itemId, imageUrl);
          console.log("Image uploaded and item updated successfully.");
        } else {
          console.log("Image upload failed.");
        }
      } catch (error) {
        console.error("Error occurred during image upload:", error);
      }
    };

    const updateItemWithImage = async (itemId, imageUrl) => {
      try {
        const response = await fetch(`/api/items/${itemId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imageUrl }),
        });

        if (!response.ok) {
          console.log("Item update failed.");
        }
      } catch (error) {
        console.error("Error occurred during item update:", error);
      }
    };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setSelectedImage(e.target.value[0])}
      />
      <button 
      onClick={handleImageUpload} 
      disabled={!selectedImage}>
        Upload Image
      </button>
    </div>
  );
};
export default Profile;
