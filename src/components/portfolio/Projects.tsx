import { motion } from "framer-motion";
import { ExternalLink, Settings, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    key: "project1",
    icon: Settings,
    tags: ["automation", "backgroundService", "dotnet", "sqlServer"],
  },
  {
    key: "project2",
    icon: Wrench,
    tags: ["dotnet", "sqlServer", "maintenance", "optimization"],
  },
];

export const Projects = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              <span className="gradient-text">{t("projects.title")}</span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  {/* Gradient accent top */}
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      >
                        <project.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </motion.div>
                    </div>
                    <CardTitle className="mt-4 group-hover:text-primary transition-colors">
                      {t(`projects.${project.key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {t(`projects.${project.key}.description`)}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.5 + index * 0.15 + tagIndex * 0.05 }}
                        >
                          <Badge
                            variant="outline"
                            className="border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            {t(`projects.tags.${tag}`)}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
