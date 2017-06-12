using System.Web.Http;
using EMS.WebApi.Repository;
using EMS.WebApi.Repository.Interfaces;
using Microsoft.Practices.Unity;

namespace EMS.WebApi.App_Start
{
    public static class UnityConfig
    {
        public static IUnityContainer ConfigureDependencyInjection(HttpConfiguration config)
        {   
            IUnityContainer container = new UnityContainer();
            container.RegisterType<IEmployeeRepository, EmployeeRepository>();            
            return container;
        }
    }
}