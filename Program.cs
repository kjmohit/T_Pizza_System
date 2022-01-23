using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PizzaOrderingSystem.Data;
using System.IO;

namespace PizzaOrderingSystem
{
    public class Program
  {
    public static void Main(string[] args)
    {
            var host = CreateHostBuilder(args).Build();

            if (args.Length > 0 && args[0].ToLower() == "/seed")
            {
                RunSeeding(host);
                return;
            }
            else
            {
                host.Run();
            }
            //CreateHostBuilder(args).Build().Run();
    }

        private static void RunSeeding(IHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var seeder = scope.ServiceProvider.GetService<PizzaOrderSeeder>();
                seeder.SeedAsync().Wait();
            }
        }
        public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureAppConfiguration(AddConfiguration)
            .ConfigureWebHostDefaults(webBuilder =>
            {
              webBuilder.UseStartup<Startup>();
            });
        private static void AddConfiguration(HostBuilderContext ctx, IConfigurationBuilder builder) {

            builder.Sources.Clear();
            builder.SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("config.json")
                .AddEnvironmentVariables();
        }
  }
}
