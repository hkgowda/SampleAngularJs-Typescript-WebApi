using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using EMS.WebApi.App_Start;
using EMS.WebApi.Resolver;

namespace EMS.WebApi
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            //Unity Dependency Injection
            config.DependencyResolver = new UnityResolver(UnityConfig.ConfigureDependencyInjection(config));

            //Cross Domain Access
            var corsAttr = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(corsAttr);

            //Forcing JSON return type
            GlobalConfiguration.Configuration.Formatters.Clear();
            GlobalConfiguration.Configuration.Formatters.Add(new JsonMediaTypeFormatter());

            //GlobalExceptionHandling Configuration
            //GlobalConfiguration.Configuration.Filters.Add(new GlobalExceptionAttribute());

            // Web API routes
            config.MapHttpAttributeRoutes();
            
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
