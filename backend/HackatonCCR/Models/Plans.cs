using System.ComponentModel.DataAnnotations;
namespace HackatonCCR.Models
{
    public class Plans
    {
        [Key]
        public int PlanId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public bool HasSleep { get; set; }

        [Required]
        public bool HasFood { get; set; }

        [Required]
        public bool HasShower { get; set; }

        [Timestamp]
        public byte[] TStamp { get; set; }
    }
}
