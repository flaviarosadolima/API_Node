using Microsoft.OpenApi.Models;

namespace API_swagger
{
    internal class Info : OpenApiInfo
    {
        public string Title { get; set; }
        public string Version { get; set; }
        public string Description { get; set; }
        public OpenApiContact Contact { get; set; }
    }
}