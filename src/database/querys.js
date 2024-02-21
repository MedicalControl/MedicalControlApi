export const queries = {
    getAllProduct: "SELECT *FROM Products",
    createProduct: "INSERT INTO Products (Name, Description, Quantity) VALUES (@Name, @Description, @Quantity)", 
    getProductById: "SELECT *FROM Products WHERE id = @id", 
    deleteProduct: "DELETE FROM Products WHERE id = @id", 
    updateById: "UPDATE Products SET Name = @Name WHERE id = @Id"
}