using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using PizzaOrderingSystem.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace PizzaOrderingSystem.Data
{
    public class PizzaRepository : IPizzaRepository
    {
        private readonly PizzaContext _context;
        private readonly ILogger<PizzaRepository> _logger;

        public PizzaRepository(PizzaContext context, ILogger<PizzaRepository> logger)
        {
            _context = context;
            _logger = logger;

        }

        public IEnumerable<Product> GetAllProducts()
        {
            try
            {
                _logger.LogInformation("Getting pizza menu");
                return _context.Products
                               .OrderBy(p => p.Title)
                               .ToList();
            }
            catch (Exception ex) {

                _logger.LogError("Failed to load pizza menu", ex);
                return null;
            }
        }

        public IEnumerable<Product> GetProductsByCategory(string category)
        {
            return _context.Products
                           .Where(p => p.Category == category)
                           .ToList();
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems)
        {
            if (includeItems)
            {
                return _context.Orders
                  .Include(o => o.Items)
                  .ThenInclude(i => i.Product)
                  .ToList();
            }
            else
            {
                return _context.Orders
                  .ToList();
            }
        }

        public Order GetOrderById(string username, int id)
        {
            return _context.Orders
              .Include(o => o.Items)
              .ThenInclude(i => i.Product)
              .Where(o => o.Id == id && o.User.UserName == username)
              .FirstOrDefault();
        }

        public IEnumerable<Order> GetOrdersByUser(string username, bool includeItems)
        {
            if (includeItems)
            {
                return _context.Orders
                  .Include(o => o.Items)
                  .ThenInclude(i => i.Product)
                  .Where(o => o.User.UserName == username)
                  .ToList();
            }
            else
            {
                return _context.Orders
                  .Where(o => o.User.UserName == username)
                  .ToList();
            }
        }



        public void AddEntity(object entity)
        {
            _context.Add(entity);
        }
        public bool SaveAll() {

            return _context.SaveChanges() > 0;
        }
    }
}
