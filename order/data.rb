module Images

  class Data
    def initialize(data, sources)
      @data = data
      @sources = sources
    end

    def rows
      @__rows ||= [].tap do |rows|
        @data.each do |row|
          @sources.each(&collect_row(row, rows))
        end
      end
    end

    def grouped_by_user_id
      empty_groups = Hash.new { |hash, key| hash[key] = [] }
      @__grouped_by_user_id ||= empty_groups.tap do |groups|
        @data.each do |row|
          @sources.each(&collect_row(row, groups[row['user_id']]))
        end
      end.values
    end

    private

    def collect_row(row, target_arr)
      ->(source) {
        url = row[source]
        next unless url

        target_arr << row
      }
    end
  end

end
