(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [
        
        {
                name: "Appendix A- Forms.md",
                title: "Appendix A: Forms",
                url: "/Appendix%20A-%20Forms.html",
                escapedPath: "Appendix%20A-%20Forms.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Appendix B- Discovery and Inspection of Electronic Documents.md",
                title: "Appendix B: Discovery and Inspection of Electronic Documents",
                url: "/Appendix%20B-%20Discovery%20and%20Inspection%20of%20Electronic%20Documents.html",
                escapedPath: "Appendix%20B-%20Discovery%20and%20Inspection%20of%20Electronic%20Documents.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Appendix C-  Sample Bills of Costs.md",
                title: "Appendix C: Sample Bills of Costs",
                url: "/Appendix%20C-%20%20Sample%20Bills%20of%20Costs.html",
                escapedPath: "Appendix%20C-%20%20Sample%20Bills%20of%20Costs.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 01-Preliminary.md",
                title: "Part I - Preliminary",
                url: "/Part%2001-Preliminary.html",
                escapedPath: "Part%2001-Preliminary.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 02-Commencement of Proceedings.md",
                title: "Part II - Commencement of Proceedings",
                url: "/Part%2002-Commencement%20of%20Proceedings.html",
                escapedPath: "Part%2002-Commencement%20of%20Proceedings.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 03-Judge-Led Approach in Resolving Family.md",
                title: "Part III – Judge-Led Approach in Resolving Family Disputes",
                url: "/Part%2003-Judge-Led%20Approach%20in%20Resolving%20Family.html",
                escapedPath: "Part%2003-Judge-Led%20Approach%20in%20Resolving%20Family.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 04-Processes relating to Children.md",
                title: "Part IV – Processes relating to Children",
                url: "/Part%2004-Processes%20relating%20to%20Children.html",
                escapedPath: "Part%2004-Processes%20relating%20to%20Children.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 05-Alternate Dispute Resolution.md",
                title: "Part V – Alternate Dispute Resolution",
                url: "/Part%2005-Alternate%20Dispute%20Resolution.html",
                escapedPath: "Part%2005-Alternate%20Dispute%20Resolution.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md",
                title: "Part VI – Proceedings for the Dissolution of Marriage under Part X of Women’s Charter",
                url: "/Part%2006-Proceedings%20for%20the%20Dissolution%20of%20Marriage%20under%20Part%20X%20of%20Women%E2%80%99s%20Charter.html",
                escapedPath: "Part%2006-Proceedings%20for%20the%20Dissolution%20of%20Marriage%20under%20Part%20X%20of%20Women%E2%80%99s%20Charter.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 07-Proceedings under Part VII and VIII of Women’s Charter.md",
                title: "Part VII – Proceedings under Part VII and VIII of Women’s Charter",
                url: "/Part%2007-Proceedings%20under%20Part%20VII%20and%20VIII%20of%20Women%E2%80%99s%20Charter.html",
                escapedPath: "Part%2007-Proceedings%20under%20Part%20VII%20and%20VIII%20of%20Women%E2%80%99s%20Charter.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 07A-Electronic Filing Service under Division 68A.md",
                title: "Part VIIA – Electronic Filing Service under Division 68A of Part 18 of the Family Justice Rules",
                url: "/Part%2007A-Electronic%20Filing%20Service%20under%20Division%2068A.html",
                escapedPath: "Part%2007A-Electronic%20Filing%20Service%20under%20Division%2068A.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 08-Adoption of Children.md",
                title: "Part VIII - Adoption of Children",
                url: "/Part%2008-Adoption%20of%20Children.html",
                escapedPath: "Part%2008-Adoption%20of%20Children.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 09-Youth Courts.md",
                title: "Part IX – Youth Courts",
                url: "/Part%2009-Youth%20Courts.html",
                escapedPath: "Part%2009-Youth%20Courts.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 10-International Child Abduction Act.md",
                title: "Part X – International Child Abduction Act",
                url: "/Part%2010-International%20Child%20Abduction%20Act.html",
                escapedPath: "Part%2010-International%20Child%20Abduction%20Act.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 11-Mental Capacity Act.md",
                title: "Part XI – Mental Capacity Act",
                url: "/Part%2011-Mental%20Capacity%20Act.html",
                escapedPath: "Part%2011-Mental%20Capacity%20Act.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 12-Probate Proceedings.md",
                title: "Part XII – Probate Proceedings",
                url: "/Part%2012-Probate%20Proceedings.html",
                escapedPath: "Part%2012-Probate%20Proceedings.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 12A–Vulnerable Adults Act.md",
                title: "Part XIIA – Vulnerable Adults Act",
                url: "/Part%2012A%E2%80%93Vulnerable%20Adults%20Act.html",
                escapedPath: "Part%2012A%E2%80%93Vulnerable%20Adults%20Act.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 13-General Procedure.md",
                title: "Part XIII - General Procedure",
                url: "/Part%2013-General%20Procedure.html",
                escapedPath: "Part%2013-General%20Procedure.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 14-General Matters.md",
                title: "Part XIV – General Matters",
                url: "/Part%2014-General%20Matters.html",
                escapedPath: "Part%2014-General%20Matters.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "Part 15-Litigants in Person.md",
                title: "Part XV - Litigants in Person",
                url: "/Part%2015-Litigants%20in%20Person.html",
                escapedPath: "Part%2015-Litigants%20in%20Person.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        {
                name: "index.md",
                title: "Family Justice Courts Practice Directions",
                url: "/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Family Justice Courts Practice Directions","",["Part 01-Preliminary.md","Part 02-Commencement of Proceedings.md","Part 03-Judge-Led Approach in Resolving Family.md","Part 04-Processes relating to Children.md","Part 05-Alternate Dispute Resolution.md","Part 06-Proceedings for the Dissolution of Marriage under Part X of Women’s Charter.md","Part 07-Proceedings under Part VII and VIII of Women’s Charter.md","Part 07A-Electronic Filing Service under Division 68A.md","Part 08-Adoption of Children.md","Part 09-Youth Courts.md","Part 10-International Child Abduction Act.md","Part 11-Mental Capacity Act.md","Part 12-Probate Proceedings.md","Part 12A–Vulnerable Adults Act.md","Part 13-General Procedure.md","Part 14-General Matters.md","Part 15-Litigants in Person.md","Appendix A- Forms.md","Appendix B- Discovery and Inspection of Electronic Documents.md","Appendix C-  Sample Bills of Costs.md","Appendix D- Fees For Use of the Technology Courts and the Mobile Infocomm Technology Facilities.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()