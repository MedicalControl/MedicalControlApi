export const queries = {
    getAllProduct: "SELECT *FROM Usuario",
    createUsers: "INSERT INTO Usuario (Contrasena, Correo, IDRol) VALUES (@Contrasena, @Correo, @IDRol)", 
    getPassword: "SELECT * FROM Usuario WHERE Correo = @Correo", 
    deleteProduct: "DELETE FROM Products WHERE id = @id", 
    updateById: "UPDATE Products SET Name = @Name WHERE id = @Id"
}