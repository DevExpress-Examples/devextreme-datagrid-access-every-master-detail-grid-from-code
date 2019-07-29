using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using System.Net.Http;
using System.Web.Http;
using System.Linq;

namespace DataGridMasterDetailAccessMVC.Controllers {
    public class DataGridMasterDetailViewController : ApiController {
        [HttpGet]
        public HttpResponseMessage Tasks(DataSourceLoadOptions loadOptions) {
            return Request.CreateResponse(DataSourceLoader.Load(SampleData.DataGridEmployees.Where(e => e.ID <= 3), loadOptions));
        }

        [HttpGet]
        public HttpResponseMessage TaskDetails(int id, DataSourceLoadOptions loadOptions) {
            var tasks = SampleData.DataGridEmployees.Where(e => e.ID == id).Select(e => e.Tasks).FirstOrDefault();
            return Request.CreateResponse(DataSourceLoader.Load(tasks, loadOptions));
        }
    }
}
