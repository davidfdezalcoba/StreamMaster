﻿namespace StreamMaster.Domain.Configuration
{
    [TsInterface(AutoI = false, IncludeNamespace = false, FlattenHierarchy = true, AutoExportMethods = false)]
    public class SDSettings
    {
        public int MaxSubscribedLineups { get; set; } = 4;
        public bool AlternateSEFormat { get; set; } = false;
        public string AlternateLogoStyle { get; set; } = "WHITE";
        public bool AppendEpisodeDesc { get; set; } = true;
        public string ArtworkSize { get; set; } = "Md";
        public bool ExcludeCastAndCrew { get; set; } = false;
        public string PreferredLogoStyle { get; set; } = "DARK";
        public bool PrefixEpisodeDescription { get; set; } = true;
        public bool PrefixEpisodeTitle { get; set; } = true;
        public bool SDEnabled { get; set; } = false;
        public int SDEPGDays { get; set; } = 7;
        public string SDCountry { get; set; } = "USA";
        public string SDPassword { get; set; } = string.Empty;
        public string SDPostalCode { get; set; } = string.Empty;
        public List<StationIdLineup> SDStationIds { get; set; } = [];
        public List<HeadendToView> HeadendsToView { get; set; } = [];
        public string SDUserName { get; set; } = string.Empty;
        public bool SeasonEventImages { get; set; } = true;
        public bool SeriesPosterArt { get; set; } = true;
        public string SeriesPosterAspect { get; set; } = "4x3";
        public bool SeriesWsArt { get; set; } = true;
        public bool XmltvAddFillerData { get; set; } = true;
        //public string XmltvFillerProgramDescription { get; set; } = "This program was generated by Stream Master to provide filler data for stations that did not receive any guide listings from the upstream source.";
        public int XmltvFillerProgramLength { get; set; } = 4;
        public bool XmltvExtendedInfoInTitleDescriptions { get; set; } = false;
        public bool XmltvIncludeChannelNumbers { get; set; } = false;
        public bool XmltvSingleImage { get; set; } = false;
    }
}
