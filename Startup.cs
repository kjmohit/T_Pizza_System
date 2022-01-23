using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using PizzaOrderingSystem.Data;
using PizzaOrderingSystem.Data.Entities;
using PizzaOrderingSystem.Services;
using System.Reflection;
using System.Text;

namespace PizzaOrderingSystem
{
    public class Startup
    {
        private readonly IConfiguration _config;
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public Startup(IConfiguration config)
        {
            _config = config;
        }
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<StoreUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;

            })
          .AddEntityFrameworkStores<PizzaContext>();
            services.AddAuthentication().AddCookie().AddJwtBearer(cfg =>
            {
                cfg.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidIssuer = _config["Tokens:Issuer"],
                    ValidAudience = _config["Tokens:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]))
                };
            });
            services.AddAuthorization();
            services.AddDbContext<PizzaContext>();
            //services.AddDbContext<PizzaContext>(cfg =>
            //{
            //    cfg.UseSqlServer();
            //});
           
            services.AddTransient<IMailService, NullMailService>();
            services.AddTransient<PizzaOrderSeeder>();
            services.AddScoped<IPizzaRepository, PizzaRepository>();
            services.AddAutoMapper(Assembly.GetExecutingAssembly());
            services.AddControllersWithViews()
              .AddRazorRuntimeCompilation()
              .AddNewtonsoftJson(cfg => cfg.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            services.AddRazorPages();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // Add Error Page
                app.UseExceptionHandler("/error");
            }

            app.UseStaticFiles();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(cfg =>
            {
                cfg.MapControllerRoute("Fallback",
            "{controller}/{action}/{id?}",
            new { controller = "App", action = "Index" });

                cfg.MapRazorPages();
            });
        }
    }
}
