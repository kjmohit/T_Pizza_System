using PizzaOrderingSystem.Data.Entities;
using System.Collections.Generic;

namespace PizzaOrderingSystem.Data
{
    public interface IPizzaRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Order> GetAllOrders(bool includeItems);
        IEnumerable<Product> GetProductsByCategory(string category);
        IEnumerable<Order> GetOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);

        void AddEntity(object entity);
        bool SaveAll();

    }
}