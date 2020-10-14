namespace API.Entities
{
    public enum Role
    {
        Free,
        Member,
        Admin
    }
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public Role UserRole { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
    }
}