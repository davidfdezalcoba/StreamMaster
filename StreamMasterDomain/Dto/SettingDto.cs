using StreamMasterDomain.Mappings;

namespace StreamMasterDomain.Dto;

public class SettingDto : Setting, IMapFrom<Setting>
{
    public IconFileDto DefaultIconDto { get; set; }
    public bool RequiresAuth { get; set; } 
    public string Version { get; set; } = "0.2.10";
}
