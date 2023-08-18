using hrBack.core.Models;

namespace hrBack.api.Services
{
    public interface IAuthService
    {
        Task<AuthModel> RegisterAsync(RegisterModel model);

        Task<AuthModel> GetTokenAsync(TokenRequestModel model);

        Task<string> AddRoleAsybc(AddRoleModel model);
    }
}
