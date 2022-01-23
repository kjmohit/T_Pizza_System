using AutoMapper;
using PizzaOrderingSystem.Data.Entities;
using PizzaOrderingSystem.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PizzaOrderingSystem.Data
{
    public class PizzaMappingProfile : Profile
    {
        public PizzaMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
              .ForMember(o => o.OrderId, ex => ex.MapFrom(i => i.Id))
              .ReverseMap(); //create map in the opposite order

            CreateMap<OrderItem, OrderItemViewModel>()
              .ReverseMap();
        }
    }
}
