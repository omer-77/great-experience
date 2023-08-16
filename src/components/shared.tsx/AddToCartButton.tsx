const AddToCartButton = ({ handleAddToCart }: { handleAddToCart: (event: React.MouseEvent<HTMLElement>) => void }) => {
  return (
    <button
      type="button"
      className="w-full h-[42px] bg-primary text-secondary  p-2 text-md rounded-md focus:bg-primary-darker"
      onClick={handleAddToCart}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
